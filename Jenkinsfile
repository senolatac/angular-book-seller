pipeline {
    agent any

    tools {
        nodejs "${env.LATEST_NODE}"
    }

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
