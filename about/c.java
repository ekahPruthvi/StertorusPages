class box{
    double w,h,d;
    double volume(){
        double vol = this.w*this.h*this.d;
        return vol;
    }
}

public class c {
    public static void main(String[] args){
        box b1 = new box();
        b1.w=10;
        b1.h=3;
        b1.d=43;
        System.out.println("the volume is:"+b1.volume());
    }
}
