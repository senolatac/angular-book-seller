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
                 stash includes: 'dist.tar.gz', name: 'dist'
                 // unstash 'dist'
                 archive 'dist.tar.gz'
            }
       }
       stage('SonarQube Analysis') {
         steps {
              script {
                  def scannerHome = tool 'SonarScanner';
                  withSonarQubeEnv(installationName: 'sha-sonar-server') {
                    sh "${scannerHome}/bin/sonar-scanner"
                  }
              }
         }
      }       
    }
}
