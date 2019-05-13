package cn.webyun.backend.Controller;

import cn.webyun.backend.Service.FSSService;
import cn.webyun.backend.ServiceImpl.FSSServiceimpl;
import cn.webyun.backend.entity.HourlyEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/spatial")
public class FSSController {

   @Autowired
    FSSServiceimpl fssServiceimpl;
    @GetMapping("/hourly")
    public String user(HourlyEntity hourlyEntity) {
        String hourlyinfo=fssServiceimpl.getinfo(hourlyEntity);
        return hourlyinfo;
    }

}
