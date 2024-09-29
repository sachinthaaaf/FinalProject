pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building Docker Image...'
                    bat 'docker build -t my-app:latest .'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying Docker Container...'
                    bat 'docker rm -f my-app-container || true'
                    bat 'docker run -d -p 3000:3000 --name my-app-container my-app:latest'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running Selenium tests...'
                // Run Selenium tests using Maven
                bat 'mvn test'
            }
        }
    }

    post {
        always {
            // Publish the JUnit test results (for Selenium tests in Maven)
            junit '**/target/surefire-reports/*.xml'
        }
    }
}
