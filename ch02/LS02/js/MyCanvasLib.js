//LS02_08
(function () {
    CanvasRenderingContext2D.prototype.triangle = function (x1,y1,x2,y2,x3,y3) {
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.closePath();
        this.stroke();
    };
    CanvasRenderingContext2D.prototype.polygon = function (x,y,r,n) {
	//��ȫ����ʵ�ֶ���εĻ���
	//����xΪ���ĵ�x���꣬yΪ���ĵ�y���꣬rΪ�뾶��nΪ����αߵ�����
	
    };
    CanvasRenderingContext2D.prototype.star = function (x,y,r,R) {
	//��ȫ����ʵ������ǵĻ���,Ҫ�������ɫΪ��ɫ�������Ϊ��ɫ
	//����xΪ���ĵ�x���꣬yΪ���ĵ�y���꣬rΪ������ھ���RΪ������⾶
	
    };
})();