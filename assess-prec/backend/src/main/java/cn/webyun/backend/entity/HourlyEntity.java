package cn.webyun.backend.entity;

import javax.validation.constraints.NotBlank;
import java.util.Date;

public class HourlyEntity {
    @NotBlank
    private String scale;

    @NotBlank
    private String times;

    private Date date;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }



    public String getScale() {
        return scale;
    }

    public void setScale(String scale) {
        this.scale = scale;
    }

    public String getTimes() {
        return times;
    }

    public void setTimes(String times) {
        this.times = times;
    }





}
