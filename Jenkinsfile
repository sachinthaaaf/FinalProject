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

        stage('Test') {
            steps {
                script {
                    echo 'Running JUnit tests...'
                    bat 'mvn test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying with Docker Compose...'
                    
                    // Start the application using Docker Compose
                    bat 'docker-compose down' // Stop any running containers
                    bat 'docker-compose up -d' // Start new containers
                }
            }
        }
    }

    // post {
    //     always {
    //         junit '**/target/surefire-reports/*.xml'
    //         archiveArtifacts artifacts: '**/target/surefire-reports/*.xml', allowEmptyArchive: true
    //     }
    //     success {
    //         echo 'Deployment succeeded with Docker Compose.'
    //     }
    //     failure {
    //         echo 'Deployment failed.'
    //     }
    // }
}
