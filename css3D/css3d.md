#### HTML5陀螺仪
**概念**：陀螺仪又叫角速度传感器，是不同于加速度计（G-sensor）的，它的测量物理量是偏转、倾斜时的转动角速度。在手机上，仅用加速度计没办法测量或重构出完整的3D动作，测不到转动的动作的，G-sensor只能检测轴向的线性动作。但陀螺仪则可以对转动、偏转的动作做很好的测量，这样就可以精确分析判断出使用者的实际动作。而后根据动作，可以对手机做相应的操作！

可以让document监听deviceorientation 来获取相关的数据，里面包括3个值alpha、beta和gamma。
1. alpha: 移动设备水平放置时，绕z轴旋转的角度，数值为0度到360度
![alt text](./imgs/alpha.jpg "Title")
2. beta: 移动设备水平放置时，绕X轴旋转的角度，数值为-180度到180度。
![alt text](./imgs/beta.jpg "Title")
3. gamma: 移动设备水平放置时，绕Y轴旋转的角度，数值为-90度到90度。
![alt text](./imgs/gamma.jpg "Title")

**code**
1. deviceorientation 
设备的物理方向信息，表示为一系列本地坐标系的旋角。
2. devicemotion
提供设备的加速信息
3. compassneedscalibration
用于通知web站点使用罗盘信息校准上述事件
