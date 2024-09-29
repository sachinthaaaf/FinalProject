pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building Docker Image...'
                    // Build the Docker image
                    bat 'docker build -t my-app:latest .'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying Docker Container...'
                    
                    // Stop any existing container and run the new one
                    bat 'docker rm -f my-app-container || true'
                    bat 'docker run -d -p 3000:3000 --name my-app-container my-app:latest'
                }
            }
        }
         stage('Test') {
            steps {
                echo 'Running tests...'
                // This will run the Jest tests
                bat 'npm test'
            }
    }
        post {
        always {
            junit '**/jest-test-results.xml'
            archiveArtifacts artifacts: '**/jest-test-results.xml', allowEmptyArchive: true
        }
    }
}
}
