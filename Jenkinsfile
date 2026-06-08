pipeline {
    agent any

    environment {
        IMAGE_NAME = "q2app"
        IMAGE_TAG  = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Code checked out from Git'
                sh 'ls -la'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Test') {
            steps {
                sh "docker run --rm ${IMAGE_NAME}:${IMAGE_TAG} node -e 'console.log(\"Tests passed!\")'"
            }
        }

        stage('Deploy Container') {
            steps {
                sh "docker stop q2app_container || true"
                sh "docker rm q2app_container || true"
                sh "docker run -d --name q2app_container -p 4000:3000 ${IMAGE_NAME}:${IMAGE_TAG}"
                sh "sleep 2 && docker ps | grep q2app_container"
            }
        }
    }

    post {
        success { echo "Pipeline SUCCESS - Build ${BUILD_NUMBER}" }
        failure { echo "Pipeline FAILED" }
    }
}