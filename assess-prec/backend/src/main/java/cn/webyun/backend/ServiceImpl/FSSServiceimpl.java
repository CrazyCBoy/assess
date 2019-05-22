package cn.webyun.backend.ServiceImpl;

import cn.webyun.backend.Service.FSSService;
import cn.webyun.backend.entity.HourlyEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FSSServiceimpl implements FSSService{

    @Override
    public String getinfo(HourlyEntity hourlyEntity) {
        Double[] M1=gennerateArray(240,1);

        for (Double a:
             M1) {
            System.out.println(a);
        }
        return M1.length+"";
    }

    //生成随机数组的方法(小数)
    public static Double[]  gennerateArray(int len,int max){
        Double[] arr=new Double[len];
        for(int i=0;i<arr.length;i++){
            arr[i]=(Math.random()*max);
        }
        return arr;
    }

}
