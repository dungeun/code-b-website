# Node.js 베이스 이미지 사용
FROM node:18-alpine AS builder

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 빌드
RUN npm run build

# 빌드 결과 확인
RUN ls -la /app/.next

# 프로덕션을 위한 nginx 설정
FROM nginx:alpine

# Next.js 빌드 결과물 복사
COPY --from=builder /app/.next /usr/share/nginx/html/.next

# Nginx 설정 파일 복사 (필요한 경우)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]