<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/15LpHvq5L0n3zWH61-DJ9sW-9Qn5OD6J8

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key

3. Run the development server:
   ```bash
   npm run dev
   ```

   **The app will ALWAYS run on:** `http://127.0.0.1:8080`
   
   - Port 8080 is strictly enforced (will error if port is busy)
   - Hot Module Replacement (HMR) is enabled for instant updates
   - If port 8080 is in use, stop the existing process first

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```
