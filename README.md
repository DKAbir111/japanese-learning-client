# ~日本~ Learn: Japanese Vocabulary Learning Application

![Project Badge](https://img.shields.io/badge/Status-Completed-brightgreen)
![License Badge](https://img.shields.io/badge/License-MIT-blue)

## 🚀 Live Links
- **Live Website**: [Mellow Peony](https://mellow-peony-b34e6c.netlify.app/)
- **Server**: [Vercel Server](https://japanese-learing-server.vercel.app/)

---

## 📂 Repository Links
- **Client Repository**: [Japanese Learning Client](https://github.com/DKAbir111/japanese-learning-client.git)
- **Server Repository**: [Japanese Learning Server](https://github.com/DKAbir111/japanese-leraring-server.git)

---

## 🌟 Project Overview
**~日本~ Learn** is an interactive Japanese vocabulary learning application designed to help users expand their vocabulary and improve communication skills in Japanese. This app aims to make learning engaging and accessible for users of all levels.

---

## 🎯 Key Features
### User Role:
- **Lessons Access**: View and study lessons.
- **Vocabulary Access**: Learn and listen to vocabulary words with pronunciation.
- **Lesson Completion**: Celebrate achievements with animations.
- **Tutorial Page**: Access 8-10 embedded YouTube tutorials for learning.

### Admin Role:
- **User Management**:
  - Promote/Demote users.
- **Content Management**:
  - Add/Edit/Delete Lessons.
  - Add/Edit/Delete Vocabulary.
  - Manage YouTube Tutorials.

---

## 🖥️ Tech Stack
### Frontend:
- **React**
- **Tailwind CSS**
- **React Router DOM**
- **React Confetti**

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** (Database)

### Authentication:
- **JWT** for secure login and registration.

### Hosting:
- **Netlify** for Client
- **Vercel** for Server

### Icons and Assets:
- **Font Awesome**
- **Google Fonts**

---

## 📜 Project Requirements Fulfilled
- **GitHub Management**:
  - Achieved over 10 meaningful commits for both client and server repositories.
- **Responsiveness**:
  - Fully responsive on mobile, tablet, and desktop.
- **Design**:
  - Unique and aligned with the project theme.
- **Error Handling**:
  - Clear error messages and loading indicators.
- **Authentication**:
  - Secure system with JWT implemented for all roles.
- **Code Quality**:
  - Modular and readable.
- **Protected Routes**:
  - All routes secured with role-based access control.

---

## 🎨 Layout Structure
### For Users:
- **Navbar**: Logo and navigation links.
- **Footer**: Additional links and information.
- **Pages**:
  - Lessons (Protected)
  - Tutorials (Protected)
  - Login
  - Register

### For Admins:
- **Dashboard**: Central management hub.
- **Pages**:
  - Lessons Management
  - Add Lessons
  - Add Vocabulary
  - Manage Users
  - Vocabulary Management

---

## 🛠️ Installation
1. Clone the repositories:
```bash
# Clone client repo
git clone https://github.com/DKAbir111/japanese-learning-client.git

# Clone server repo
git clone https://github.com/DKAbir111/japanese-leraring-server.git
```

2. Install dependencies:
```bash
# Client
cd japanese-learning-client
npm install

# Server
cd japanese-leraring-server
npm install
```

3. Start the development servers:
```bash
# Client
npm run dev

# Server
npm start
```

4. Configure `.env` for the server:
```env
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
```

---

## 📚 API Endpoints
### Authentication:
- `POST /api/auth/register`: User registration.
- `POST /api/auth/login`: User login.

### Admin Routes:
- `GET /api/admin/users`: View all users.
- `PATCH /api/admin/users/:id`: Update user role.

### Lessons:
- `GET /api/lessons`: Fetch all lessons.
- `POST /api/lessons`: Add a lesson (Admin only).
- `PUT /api/lessons/:id`: Update a lesson (Admin only).
- `DELETE /api/lessons/:id`: Delete a lesson (Admin only).

### Vocabulary:
- `GET /api/vocabulary`: Fetch all vocabularies.
- `POST /api/vocabulary`: Add a vocabulary (Admin only).
- `PUT /api/vocabulary/:id`: Update a vocabulary (Admin only).
- `DELETE /api/vocabulary/:id`: Delete a vocabulary (Admin only).

---

## 🌐 Deployment
- **Netlify**: Hosted the frontend for fast and reliable delivery.
- **Vercel**: Hosted the backend API for secure and scalable performance.

---

## 📸 Screenshots
### User Interface
![User Lessons Page](#)
![Tutorials Page](#)

### Admin Dashboard
![Admin Manage Lessons](#)
![Admin Manage Users](#)

---

## 🧑‍💻 Developer
**Darun Karas Abir**  
[GitHub Profile](https://github.com/DKAbir111)

---

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.