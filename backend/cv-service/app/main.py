from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.post('/upload')
async def upload(file: UploadFile = File(...)):
    content = await file.read()
    # TODO: parse CV using spaCy
    return {"filename": file.filename, "size": len(content)}
