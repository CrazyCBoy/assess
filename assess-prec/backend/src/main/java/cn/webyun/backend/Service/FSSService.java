package cn.webyun.backend.Service;

import cn.webyun.backend.entity.HourlyEntity;
import org.springframework.stereotype.Service;

@Service
public interface FSSService {

    String  getinfo(HourlyEntity hourlyEntity);

}
