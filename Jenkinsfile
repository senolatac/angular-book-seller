pipeline {
    agent any

    stages {
       stage('Build and Test') {
            steps {
                sh 'npm install'
            }
        }
        stage("Build") {
                    steps {
                        sh "npm run build"
                    }
       }
    }
}
