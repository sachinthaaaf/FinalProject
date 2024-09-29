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
        stage('Test') {
            steps {
                echo 'Running tests...'
                // No need for any shell commands since you just want to echo
            }
        }
    }
}
