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
                    
                    // Increase sleep time to 10 seconds to ensure server has time to start
                    echo 'Waiting for the server to start...'
                    sleep 10
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'Running JUnit tests...'
                    // Run Maven tests (JUnit)
                    bat 'mvn test'
                }
            }
        }
    }

    // post {
    //     always {
    //         // Collect and process JUnit test results
    //         // junit '**/target/surefire-reports/*.xml'
    //         // archiveArtifacts artifacts: '**/target/surefire-reports/*.xml', allowEmptyArchive: true
    //     }
    // }
}
