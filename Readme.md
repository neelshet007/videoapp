VideoTube Backend 🎥
A robust, production-ready backend for a video-sharing platform, built using the MERN stack. This project implements secure authentication, video/image processing, and complex data modeling.

🚀 Features
Secure Authentication: Utilizes JWT (JSON Web Tokens) for access and refresh token logic, ensuring persistent and secure user sessions.

Password Security: Industry-standard password hashing using bcrypt .

File Management: Integrated with Cloudinary for cloud-based storage and optimization of videos and images.

Database Management: Optimized MongoDB schemas with aggregation pipelines for high-performance data retrieval.

File System handling: Local middleware using Multer for temporary file staging before cloud upload.

Standardized API: Consistent API responses and error handling wrappers.

🛠 Tech Stack
Runtime: Node.js

Framework: Express.js

Database: MongoDB

ODM: Mongoose

Storage: Cloudinary

Security: JWT, bcrypt, CORS

src/
├── controllers/    # Request handling logic
├── db/             # Database connection setup
├── middlewares/    # Auth, Multer, and error handling
├── models/         # Mongoose schemas (User, Video, etc.)
├── routes/         # API endpoints
├── utils/          # ApiError, ApiResponse, and Cloudinary helpers
└── app.js          # Express app configuration

PORT=8000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


🛤 API Endpoints (Examples)
User Routes
POST /api/v1/users/register- Register a new user

POST /api/v1/users/login- Login and receive tokens

POST /api/v1/users/refresh-token- Renew access tokens

PATCH /api/v1/users/update-avatar- Update profile picture (via Multer/Cloudinary)

Video Routes
POST /api/v1/videos/publish- Upload video and thumbnail



