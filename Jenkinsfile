pipeline {
    agent any

    tools {
        nodejs "${env.LATEST_NODE}"
        maven "Maven3"
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
            withSonarQubeEnv(installationName: 'sha-sonar-server') {
               sh "mvn clean verify sonar:sonar -Dsonar.exclusions=node_modules/*,**,*.spec.ts -Dsonar.branch.name=$BRANCH_NAME -Dsonar.projectKey=senolatac_angular-book-seller_AY8rMK_KBUsYXRYLyB8n -Dsonar.projectName='angular-book-seller'"
            }
          }
      }      
    }
}
