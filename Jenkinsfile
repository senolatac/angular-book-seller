pipeline {
    agent any

    tools {
        nodejs "${env.LATEST_NODE}"
    }

    environment {
        SONARQUBE_PROJECT_KEY = "senolatac_angular-book-seller_AY8rMK_KBUsYXRYLyB8n"
        PROJECT_NAME = "angular-book-seller"
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
                  //def scannerHome = tool 'sha-sonar-scanner';
                  withSonarQubeEnv(installationName: 'sha-sonar-server') {
                    sh "${tool('sha-sonar-scanner')}/bin/sonar-scanner  -Dsonar.branch.name=$BRANCH_NAME -Dsonar.projectKey=${SONARQUBE_PROJECT_KEY} -Dsonar.projectName=${PROJECT_NAME} -Dsonar.exclusions=node_modules/*,**/*.spec.ts -Dsonar.sources=src"
                  }
              }
         }
      }       
    }
}
