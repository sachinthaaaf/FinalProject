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
                script {
                    echo 'Running JUnit tests...'
                    // Run Maven tests (JUnit will be executed as part of the `mvn test` phase)
                    bat 'mvn test'
                }
            }
        }
    }

    post {
        always {
            // Collect and process JUnit test results
            junit '**/target/surefire-reports/*.xml'  // This is the default directory for Maven test reports
            archiveArtifacts artifacts: '**/target/surefire-reports/*.xml', allowEmptyArchive: true
        }
    }
}
