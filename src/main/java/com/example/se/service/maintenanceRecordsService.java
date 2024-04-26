package com.example.se.service;

import com.example.se.model.maintenanceRecords;

import java.util.List;

public interface maintenanceRecordsService {
    /**
     * Find all records
     * @return
     * A list containing all records
     */
    List<maintenanceRecords> findAllRecords();

    /**
     * Save method
     * @param maintenanceRecords maintenanceRecords
     * @return
     * maintenanceRecords object which was saved
     */
    maintenanceRecords save(maintenanceRecords maintenanceRecords);

    /**
     * Delete by id
     * @param id: int
     */
    void deleteByRecordID(int id);
}
