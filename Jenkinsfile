pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building Docker Image...'
                    // Build the Docker image
                    def image = docker.build("my-app:latest")
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying Docker Container...'
                    
                    // Stop and remove any existing container running on port 80
                    sh 'docker rm -f my-app-container || true'
                    
                    // Run the new container from the built image
                    sh 'docker run -d -p 80:80 --name my-app-container my-app:latest'
                }
            }
        }
    }
}
