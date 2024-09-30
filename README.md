
# Pharma-Vision

Pharma Vision is a healthcare-focused application designed to streamline communication between doctors, pharmacists, and patients. The platform enables secure tracking and management of patient prescriptions, allowing pharmacists to accurately count, identify, and package medications using AI-powered video detection.

## Demo video
[![Watch the demo](https://img.youtube.com/vi/51YKMXWDTzE/0.jpg)](https://youtu.be/51YKMXWDTzE)

## Features

- **Prescription Tracking**: Seamless communication between doctors, pharmacists, and patients for medication count, type, and dosage.
- **AI-Powered Video Detection**: Utilizes computer vision to identify and count various types of pills.
- **User Dashboards**: Intuitive interfaces displaying patient, pill, and doctor information to manage prescriptions effectively.


## Tech Stack

**Frontend:** ReactJS

**Backend:** Supabase, Python

**Image-Processing:** OpenCV, Roboflow API


## Installation

### Frontend (React)
1. Clone the Repository:
```bash
git clone https://github.com/d4julian/pharma-vision.git
cd pharma-vision/frontend

```
2. Install dependecies:
```bash
npm install

```
3. Start React Development Server:
```bash
npm start

```

### Backend
1. Install python requirements:
```bash
cd pharma-vision/backend
pip install -r requirements.txt
```
2. Run Image Detection Server:
```bash
python app.py
```
### Database 
1. Set up a Supabase project on https://supabase.com/.
2. Create tables for patients, doctors, prescriptions, and pills.
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_SUPABASE_API_KEY`

`REACT_APP_SUPABASE_URL`

`ROBLOFLOW_API_KEY`

