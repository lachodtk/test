#!groovy

pipeline {
  agent {
    docker {
      image 'node:6-alpine' 
      args '-p 3000:3000' 
    }
  }
  stages {

    stage('Build') {
      steps {
         sh 'npm install ./sampleWebApp'
      }
    }

    stage('Test') {
      steps {
         sh 'npm test ./sampleWebApp'
      }
    }

    stage('Docker Build') {
      agent any
      steps {
        sh 'docker build -t samplewebapp_webapp ./sampleWebApp'
      }
    }
  }
}
