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
         sh 'pushd sampleWebApp; npm install; popd'
      }
    }

    stage('Test') {
      steps {
         sh 'pushd sampleWebApp; npm test; popd'
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
