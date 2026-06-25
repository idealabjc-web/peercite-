import os
import glob
import fitz  # PyMuPDF

pdf_dir = r"c:\Users\ADMIN\Desktop\peercite-publishers\assets\pdfs\WL-WH"
output_file = r"c:\Users\ADMIN\Desktop\peercite-publishers\tawkto-knowledge-base.txt"

pdf_files = glob.glob(os.path.join(pdf_dir, "*.pdf"))

with open(output_file, "w", encoding="utf-8") as out:
    out.write("PEERCITE PROCEEDINGS KNOWLEDGE BASE\n")
    out.write("This document contains the text of all conference proceedings along with their exact direct links.\n")
    out.write("If a user asks for a link to their presentation, look at the DIRECT LINK associated with their text.\n\n")
    
    for pdf_path in pdf_files:
        pdf_name = os.path.basename(pdf_path)
        print(f"Processing {pdf_name}...")
        
        try:
            doc = fitz.open(pdf_path)
            for page_num in range(len(doc)):
                page = doc.load_page(page_num)
                text = page.get_text()
                
                # Some basic cleanup
                text = text.replace('\n', ' ')
                # Remove excessive whitespace
                text = ' '.join(text.split())
                
                # The viewer.html uses 1-indexed pages for its anchor
                actual_page_num = page_num + 1
                
                out.write("=========================================\n")
                out.write(f"DOCUMENT: {pdf_name}\n")
                out.write(f"DIRECT LINK: https://www.peercite.org/viewer.html#assets/pdfs/WL-WH/{pdf_name}-p{actual_page_num}\n")
                out.write("TEXT CONTENT:\n")
                out.write(text + "\n")
                out.write("=========================================\n\n")
            doc.close()
        except Exception as e:
            print(f"Error processing {pdf_name}: {e}")

print(f"Done! Created {output_file}")
