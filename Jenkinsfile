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
                    sleep 10
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

        stage('Monitoring and Alerting') {
            steps {
                script {
                    echo 'Setting up New Relic for monitoring...'
                    bat 'docker-compose down'
                    bat 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            script {
                echo "Checking if any alert conditions are met..."
                // Check application health status
                def response = bat(script: 'curl -s http://localhost:3000/status', returnStdout: true).trim()
                if (response != 'Status: OK') {
                    echo 'ALERT: Application is not healthy!'
                    // Here you could send an email or Slack notification if integrated
                } else {
                    echo 'Application is running fine.'
                }
            }
        }
    }
}
