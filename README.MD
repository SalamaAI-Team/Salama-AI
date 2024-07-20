

# SalamaAI

SalamaAI is an innovative health application designed to track vital health metrics and provide personalized recommendations to help prevent non-communicable diseases (NCDs). By leveraging AI models, user inputs, and mobile sensors, SalamaAI empowers users to take control of their health and well-being.

## Features

1. **Tracking Tools & Recommendations**
   - Track vital signs, physical activity, diet, and sleep patterns.
   - Receive personalized feedback and recommendations to maintain a healthy lifestyle.

2. **Risk Assessment**
   - AI-powered risk calculation for non-communicable diseases.
   - Identification of high-risk individuals based on user data.

3. **Image Analysis**
   - Upload images of food and environmental conditions.
   - AI-powered analysis to identify unhealthy habits or risk factors.

4. **Virtual Coaching**
   - Guidance and support through interactive virtual coaching sessions.
   - Virtual therapy sessions to promote mental well-being.

5. **Medication Reminders**
   - Set and receive reminders to take medication on time.

6. **Consultation**
   - AI-generated questionnaires to help users describe their symptoms.
   - Initial analysis and recommendations based on user inputs.

## Getting Started

### Prerequisites
- [NodeJs](https://nodejs.org/en/download/package-manager)
- [Flutter](https://flutter.dev/docs/get-started/install)
- [Firebase Account](https://firebase.google.com/)
- [Langchain](https://www.langchain.com/)
- [Gemini API](https://www.gemini.com/api)
- [Llama Index](https://www.llamaindex.com/)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/salamaai.git
   cd salamaai
   ```

2. **Install Dependencies**
   ```bash
   flutter pub get
   ```

3. **Set Up Firebase**
   - Follow the [Firebase setup guide](https://firebase.flutter.dev/docs/overview) to integrate Firebase with your Flutter app.
   - Add your Firebase configuration files (`google-services.json` for Android and `GoogleService-Info.plist` for iOS).

4. **Configure APIs**
   - Obtain API keys for Langchain, Gemini API, and Llama Index.
   - Set up environment variables or add the keys directly in the app's configuration files.

### Running the App

1. **Run the App**
   ```bash
   flutter run
   ```

2. **Using the App**
   - Create an account or log in.
   - Start tracking your health metrics and receive personalized recommendations.
   - Upload images for analysis and engage with virtual coaching sessions.
   - Set medication reminders and fill out health questionnaires.

## Architecture

- **Frontend**: Flutter/RectJs
- **Backend**: Firebase
- **AI Models**: Langchain, Gemini API,MedLM, 

### Folder Structure for mobile

```
salamaai/
│
├── backend/                 #All Backend and APis goes here
├── frontend/                 # the front end goes here
│       
├── README.md               # This file
```

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.`

## Contact

For any questions or suggestions, please reach out to us at [contact@example.com](mailto:bbjuius900@gmail.cm).

