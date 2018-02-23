#!groovy

pipeline {
  agent none
  stages {
    stage('Test'){
         sh 'npm install'
         sh 'npm test'
       }

    stage('Docker Build') {
      agent any
      steps {
        sh 'docker build -t samplewebapp_webapp ./sampleWebApp'
      }
    }
  }
