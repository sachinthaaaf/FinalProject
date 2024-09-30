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
                
                def response = bat(script: 'curl -s http://localhost:3000/status', returnStdout: true).trim()
                
                if (response != 'Status: OK') {
                    echo 'ALERT: Application is running fine!'
                    emailext (
                        subject: "ALERT: Application Health Check Success in ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                        body: """
                        <p>The application health check has been successful during the monitoring stage.</p>
                        <p>Status returned: ${response}</p>
                        <p>Job: ${env.JOB_NAME}</p>
                        <p>Build Number: ${env.BUILD_NUMBER}</p>
                        <p>Build URL: <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
                        """,
                        recipientProviders: [[$class: 'DevelopersRecipientProvider']],
                        to: 'fernandosachintha08@gmail.com'
                    )
                } else {
                    echo 'Application is not healthy.'
                    emailext (
                        subject: "ALERT: Application Health Check failed in ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                        body: """
                        <p>The application health check has failed during the monitoring stage.</p>
                        <p>Status returned: ${response}</p>
                        <p>Job: ${env.JOB_NAME}</p>
                        <p>Build Number: ${env.BUILD_NUMBER}</p>
                        <p>Build URL: <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
                        """,
                        recipientProviders: [[$class: 'DevelopersRecipientProvider']],
                        to: 'fernandosachintha08@gmail.com'
                    )
                }
            }

        }
    }
}
