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
                    // Deploy application with New Relic agent
                    bat 'docker-compose down'
                    bat 'docker-compose up -d'
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
    //         echo 'Build succeeded with all tests passed.'
    //     }
    //     unstable {
    //         echo 'Build is unstable due to test failures or code quality issues.'
    //     }
    // }
}
