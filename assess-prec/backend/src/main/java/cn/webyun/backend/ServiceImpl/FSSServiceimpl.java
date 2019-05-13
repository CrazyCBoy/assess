package cn.webyun.backend.ServiceImpl;

import cn.webyun.backend.Service.FSSService;
import cn.webyun.backend.entity.HourlyEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FSSServiceimpl implements FSSService{

    @Override
    public String getinfo(HourlyEntity hourlyEntity) {
        return "FSSController----FSSService---getinfo()";
    }
}
