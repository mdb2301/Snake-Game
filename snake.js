function Snake(){
    this.x = 0;
    this.y = 0;
    this.xs = 1;
    this.ys = 0;
    this.len = 1;
    this.tail = [];
    this.update = function(){
        if(this.len === this.tail.length){
            for(var i=0;i<this.tail.length-1;i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.len-1] = createVector(this.x,this.y);
        
        this.x = this.x + this.xs*sz;
        this.y = this.y + this.ys*sz;
        this.x = constrain(this.x,0,width-sz);
        this.y = constrain(this.y,0,height-sz);       
    }

    this.show = function(){
        fill(255,0,0);
        for(var i=0;i<this.len;i++){
            rect(this.tail[i].x,this.tail[i].y,sz,sz);
        }
    }

    this.dir = function(x,y){
        this.xs = x;
        this.ys = y;
    }

    this.eatFood = function(pos){
        var d = dist(this.x,this.y,pos.x,pos.y);
        if(d<1){
            this.len++;
            return true;
        }else{
            return false;
        }
    }
}