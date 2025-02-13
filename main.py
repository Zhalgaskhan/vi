from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Mount the "static" directory to serve frontend assets
app.mount("/", StaticFiles(directory="static", html=True), name="static")
