# phone-ask

A Next.js web app. Follow the steps below to get it running and deployed — no experience needed.

---

## Step 1: Install the required tools

Before anything, you need these installed on your computer:

1. **Git** — to download and manage code
   - Download from https://git-scm.com/downloads
   - Install it with all default options

2. **Node.js** — to run the app
   - Download from https://nodejs.org (pick the **LTS** version)
   - Install it with all default options

3. **A code editor** (optional but recommended)
   - Download **VS Code** from https://code.visualstudio.com

To verify the installs worked, open your terminal (Mac: search "Terminal", Windows: search "Command Prompt") and run:

```bash
git --version
node --version
npm --version
```

If you see version numbers, you're good to go.

---

## Step 2: Create a GitHub account

1. Go to https://github.com
2. Click **Sign up** and create a free account
3. Verify your email

---

## Step 3: Fork or clone this repository

### Option A — If you just want to run it locally (no changes):

Open your terminal and run:

```bash
git clone https://github.com/mrkurniawan20/phone.git
```

This downloads the project to your computer.

### Option B — If you want your own copy on GitHub (recommended for deploying):

1. Go to https://github.com/mrkurniawan20/phone
2. Click the **Fork** button (top right) — this copies the repo to your own GitHub account
3. Then clone YOUR fork:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/phone.git
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

---

## Step 4: Open the project folder

In your terminal, navigate into the project:

```bash
cd phone
```

---

## Step 5: Install dependencies

Run this command to install everything the app needs:

```bash
npm install
```

This may take a minute. Wait for it to finish.

---

## Step 6: Run the app locally

```bash
npm run dev
```

Then open your browser and go to: http://localhost:3000

You should see the app running. Press `Ctrl + C` in the terminal to stop it.

---

## Step 7: Push your code to GitHub (if you made changes)

If you edited anything and want to save it to GitHub:

```bash
git add .
git commit -m "my changes"
git push
```

It will ask for your GitHub username and password the first time.

---

## Step 8: Deploy on Vercel (make it live on the internet)

Vercel is a free hosting platform made for Next.js apps. It's the easiest way to deploy.

1. Go to https://vercel.com and click **Sign Up**
2. Choose **Continue with GitHub** and connect your GitHub account
3. Click **Add New Project**
4. You'll see a list of your GitHub repos — find **phone** and click **Import**
5. Leave all settings as default
6. Click **Deploy**

Vercel will build and deploy your app automatically. In about 1–2 minutes, you'll get a live URL like:

```
https://phone-abc123.vercel.app
```

That's your live app — share it with anyone!

---

## Updating your app after changes

Whenever you push new code to GitHub:

```bash
git add .
git commit -m "describe what you changed"
git push
```

Vercel will automatically detect the push and redeploy your app. No extra steps needed.

---

## Common issues

**`npm install` fails?**
Make sure Node.js is installed correctly. Try closing and reopening the terminal.

**`git clone` says "not found"?**
Double-check the URL and make sure you copied it correctly.

**Vercel says "Build failed"?**
Make sure `npm run dev` works on your machine first before deploying.
