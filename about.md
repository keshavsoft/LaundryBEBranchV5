
# Laundry Management System – Backend

This repository (`LaundryBEBranchV4`) serves as the **main backend application** for the Laundry Management System.  
It works in combination with two additional repositories for frontend development:

- **Admin Frontend** → [LaundryUiV1](https://github.com/keshavsoft/LaundryUiV1)  
- **User Frontend** → [FrontEndForUsers](https://github.com/keshavsoft/FrontEndForUsers)  


## 🚀 Installation & Setup

Follow the steps below to set up and run the backend locally:

1. **Create a new folder and navigate into it**
   ```
   mkdir LaundrySystem 
   cd LaundrySystem
   ```

2. **Clone the backend repository**
   ```
   git clone https://github.com/keshavsoft/LaundryBEBranchV4
   ```

3. **Navigate into the project folder**
   ```
   cd LaundryBEBranchV4
   ```

4. **Install dependencies**
   ```
   npm install
   ```

5. **Run the backend server**
   ```
   node app
   ```


## 🖥️ Working with Frontend Repositories

The backend is linked with two frontend repositories:

- [LaundryUiV1](https://github.com/keshavsoft/LaundryUiV1) → **Admin side UI**
- [FrontEndForUsers](https://github.com/keshavsoft/FrontEndForUsers) → **User side UI**

### 🔗 How They Work Together

#### Backend (`LaundryBEBranchV4`)
- Runs the core server and APIs
- Contains a `public` folder that serves frontend files

#### Frontend Repositories (`LaundryUiV1` & `FrontEndForUsers`)
- These repos are used for making changes to the frontend
- After modifying code, run the **build scripts** from their `package.json`
- The build process generates updated frontend files

#### Integrating with Backend
- Copy the **generated frontend files** (from build) into the `public` folder of the backend (`LaundryBEBranchV4`)
- Restart the backend server if needed

👉 This way, the backend always serves the latest frontend changes.

---

## 📂 Repository Structure

- **LaundryBEBranchV4** → Backend (main repo, runs APIs + serves frontend)
- **LaundryUiV1** → Admin frontend (secondary repo)
- **FrontEndForUsers** → User frontend (secondary repo)

---

## ✅ Summary

- Clone and run the **main backend repo** first
- For frontend changes, update code in **`LaundryUiV1`** or **`FrontEndForUsers`**
- Build the frontend projects → copy generated files into **`LaundryBEBranchV4/public`**
- Restart the backend to reflect changes
```