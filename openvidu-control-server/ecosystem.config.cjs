require('dotenv').config();

module.exports = {
  apps: [
    {
      name: "openvidu-server",
      script: "src/index.js",
      instances: 1, // 단일 프로세스 실행 (서버 CPU 가 하나임)
      env: {
        NODE_ENV: process.env.NODE_ENV || "production",
        SERVER_PORT: process.env.SERVER_PORT || 6080,
        LIVEKIT_URL: process.env.LIVEKIT_URL,
        LIVEKIT_API_KEY: process.env.LIVEKIT_API_KEY,
        LIVEKIT_API_SECRET: process.env.LIVEKIT_API_SECRET,
        S3_ENDPOINT: process.env.S3_ENDPOINT,
        S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
        S3_SECRET_KEY: process.env.S3_SECRET_KEY,
        AWS_REGION: process.env.AWS_REGION,
        S3_BUCKET: process.env.S3_BUCKET,
        RECORDINGS_PATH: process.env.RECORDINGS_PATH,
      },
      max_memory_restart: "512M", // 메모리 초과 시 자동 재시작
    },
  ],
};
