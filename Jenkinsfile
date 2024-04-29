pipeline {
    agent any

    tools {
        npm "${env.LATEST_NODE}"
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
