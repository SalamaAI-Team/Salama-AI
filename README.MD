### Updated README for SalamaAI
### the updated repo is https://github.com/NestorMugambi/salama-ai

---

# SalamaAI

SalamaAI is an innovative health application designed to track vital health metrics and provide personalized recommendations to help prevent non-communicable diseases (NCDs). By leveraging AI models, user inputs, and web technologies, SalamaAI empowers users to take control of their health and well-being.

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

- [Node.js](https://nodejs.org/)
- [Next.js](https://nextjs.org/)
- [Django](https://www.djangoproject.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase Account](https://firebase.google.com/)
- [Langchain](https://www.langchain.com/)
- [Gemini API](https://www.gemini.com/api)
- [Supabase](https://supabase.com/)


### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/salamaai.git
   cd salamaai
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

4. **Set Up Firebase**
   - Follow the [Firebase setup guide](https://firebase.flutter.dev/docs/overview) to integrate Firebase.
   - Add your Firebase configuration files.

5. **Configure APIs**
   - Obtain API keys for Google API,Cohere and supabase rename .env.example to .env.local in frontend.
   - Set up environment variables or add the keys directly in the app's configuration files.

### Running the App

1. **Run the Backend**
   ```bash
   cd backend
   python manage.py runserver
   ```

2. **Run the Frontend**
   ```bash
   cd ../frontend
   npm run dev
   ```

3. **Using the App**
   - Create an account or log in.
   - Start tracking your health metrics and receive personalized recommendations.
   - Upload images for analysis and engage with virtual coaching sessions.
   - Set medication reminders and fill out health questionnaires.

## Architecture

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Django, Firebase
- **AI Models**: OpenAI,Gemini

### Folder Structure

```
salamaai/
│
├── backend/                # Django backend
│
├── webapp/               # Next.js frontend
│   ├── .vscode/            # VS Code configuration
│   ├── app/                # Next.js app directory
│   │   ├── agents/         # AI agents
│   │   ├── ai_sdk/         # AI SDK integration
│   │   ├── api/            # API handlers for langchain
│   │   ├── generative_ui/  # Generative UI components
│   │   ├── retrieval/      # Data retrieval components
│   │   ├── retrieval_agents/  # Retrieval agents
│   │   ├── structured_output/ # Structured output components
│   │   ├── favicon.ico     # Favicon
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Main layout
│   │   └── page.tsx        # Main page
│   ├── components/         # Reusable UI components
│   ├── data/               # Data storage
│   ├── public/             # Public assets
|   ├── .env.example        # Environment variables
│   ├── .eslintrc.json      # ESLint configuration
│   ├── .gitignore          # Git ignore file
│   ├── next.config.mjs     # Next.js configuration
│   ├── package.json        # Project configuration
│   ├── package-lock.json   # Package lock file
│   ├── postcss.config.mjs  # PostCSS configuration
│   ├── tailwind.config.ts  # Tailwind CSS configuration
│   └── tsconfig.json       # TypeScript configuration
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

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please reach out to us at [SalamAaI](mailto:bbjulius900@gmail.com).
