pipeline {
    agent any

    tools {
        nodejs "${env.LATEST_NODE}"
    }

    stages {
       stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage("Build") {
            steps {
                 sh "npm run build"
             }
       }
       stage('Archive') {
            steps {
                 sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
                 archive 'dist.tar.gz'
            }
       }
    }
}
