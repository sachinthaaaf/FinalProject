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
                    // Run the tests using Maven or Gradle
                    // Uncomment one of the following lines based on your project setup:
                    bat 'mvn test'     // For Maven
                    // bat 'gradle test'  // For Gradle
                }
            }
        }
    }

    post {
        always {
            // Collect and process the JUnit test results
            // Use the correct path for Maven or Gradle test results
            junit '**/target/surefire-reports/*.xml'  // For Maven
            // junit '**/build/test-results/test/*.xml'  // For Gradle (uncomment this if using Gradle)
            
            // Optionally archive test results as artifacts
            archiveArtifacts artifacts: '**/target/surefire-reports/*.xml', allowEmptyArchive: true  // For Maven
            // archiveArtifacts artifacts: '**/build/test-results/test/*.xml', allowEmptyArchive: true  // For Gradle
        }
    }
}
