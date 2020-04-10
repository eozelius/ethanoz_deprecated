pipeline {
  agent {
    docker {
      image 'node:12.16.1-alpine3.9'
      args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Install dependencies') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Lint') {
      steps {
        sh 'yarn lint'
      }
    }
    stage('Unit Test') {
      steps {
        sh 'yarn unit'
      }
    }
  }
}
