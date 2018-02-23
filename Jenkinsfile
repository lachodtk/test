#!groovy

pipeline {
  agent none
  stages {

    stage('Test') {
      agent any
      steps {
         sh 'npm install'
         sh 'npm test'
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
