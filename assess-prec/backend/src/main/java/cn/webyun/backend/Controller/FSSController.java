package cn.webyun.backend.Controller;

import cn.webyun.backend.Response.ResponseBase;
import cn.webyun.backend.Service.FSSService;
import cn.webyun.backend.ServiceImpl.FSSServiceimpl;
import cn.webyun.backend.entity.HourlyEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/spatial")
public class FSSController {

   @Autowired
    FSSServiceimpl fssServiceimpl;
    @GetMapping("/hourly")
    public ResponseEntity<?> user(@RequestBody HourlyEntity hourlyEntity) {
        //String hourlyinfo=fssServiceimpl.getinfo(hourlyEntity);
        return ResponseEntity.ok(new ResponseBase(true,"success"));
    }
}
