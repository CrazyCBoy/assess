package cn.webyun.backend.Mapper;


import cn.webyun.backend.entity.HourlyEntity;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.type.JdbcType;

import java.util.List;

public interface FSSMapper {




    @Select({"seletc" ,
            "*" ,
            "from FSSinfo" ,
            "where scale=#{scale}"})
    @Results({
            @Result(column="id", property="id", jdbcType= JdbcType.INTEGER, id=true),
            @Result(column="priv_name", property="privName", jdbcType=JdbcType.VARCHAR),
            @Result(column="priv_desc", property="privDesc", jdbcType=JdbcType.VARCHAR)
    })
    List eachTimeInfo(String scale);

}
