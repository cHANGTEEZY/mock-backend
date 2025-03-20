# How to Run JSON Server on Glitch

This guide walks you through deploying a mock backend using `json-server` on Glitch.

## Steps to Deploy

### 1. Download the Repository

- Download the following repository as a ZIP file:

  ```
  https://github.com/cHANGTEEZY/mock-backend.git
  ```

- Extract the ZIP file.
- Open the extracted folder in a text editor (e.g., VSCode, Sublime Text).

### 2. Upload to Your Own GitHub Repository

- Create a new repository on GitHub.
- Upload the extracted files to your repository.
- Initialize a new Git repository:

  ```sh
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
  git push -u origin main
  ```

- Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name.

### 3. Create an Account on Glitch

- Go to [Glitch](https://glitch.com/).
- Sign up using your GitHub account.

### 4. Import the Repository to Glitch

- Click **New Project** > **Import from GitHub**.
- Enter your GitHub repository URL and import it.

### 5. Get the Live Link

- Click on the **Share** button in Glitch.
- Copy the **Live Site** link.

### 6. Update Your Frontend

- In your frontend project, replace any `localhost` API links with the new Glitch live link.

## Example

If your Glitch link is:

```
https://your-project-name.glitch.me
```

Replace this in your frontend code:

```js
fetch("http://localhost:3000/users");
```

with:

```js
fetch("https://your-project-name.glitch.me/users");
```

## Notes

- Glitch may put projects to sleep after inactivity. Use an uptime monitor to keep it running.
- Ensure your `db.json` follows correct JSON formatting.

## Resources

- [HOW TO DEPLOY IN DEPTH GUIDE](https://medium.com/@prabal19999/deploy-json-server-on-glitch-f9ef544551a8)
- [JSON Server Docs](https://github.com/typicode/json-server)
- [Glitch Help Center](https://help.glitch.com/)
