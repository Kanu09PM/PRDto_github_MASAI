from PyPDF2 import PdfReader

pdf_path = r"hopr_1st_Sunday PRD.pdf"
reader = PdfReader(pdf_path)
text = "\n".join(page.extract_text() or "" for page in reader.pages)
print(text[:20000])
