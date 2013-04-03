'use strict';

Plan10.Component.RobotAnimationIndividual = function(gameObject, component) {
    var transform;
    
    //define animations on create
    component.$on('engine.create', function() {
        //disable until we know we've loaded & defined the animations needed
        gameObject.disable();
        var animator = gameObject.getComponent('spriteAnimator');
        
        var paths = [
            'assets/robot/robowalk00.png',
            'assets/robot/robowalk01.png',
            'assets/robot/robowalk02.png',
            'assets/robot/robowalk03.png',
            'assets/robot/robowalk04.png',
            'assets/robot/robowalk05.png',
            'assets/robot/robowalk06.png',
            'assets/robot/robowalk07.png',
            'assets/robot/robowalk08.png',
            'assets/robot/robowalk09.png',
            'assets/robot/robowalk10.png',
            'assets/robot/robowalk11.png',
            'assets/robot/robowalk12.png',
            'assets/robot/robowalk13.png',
            'assets/robot/robowalk14.png',
            'assets/robot/robowalk15.png',
            'assets/robot/robowalk16.png',
            'assets/robot/robowalk17.png',
            'assets/robot/robowalk18.png'
        ];
        
        //load assets on start
        gameObject.engine.loadAssets(paths, function(images) {
            
            //walk animation
            animator.define('walk', images);
            
            //activate
            gameObject.enable();
        });
    });
        
};
Plan10.Component.RobotAnimationIndividual.alias = "plan10.robotAnimationIndividual";
Plan10.Component.RobotAnimationIndividual.requires = ['spriteAnimator'];